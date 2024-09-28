// import 'dart:async';
// import 'dart:convert';
// import 'dart:developer';

// import 'package:dio/dio.dart';
// import 'package:flutter_bandung_bedas/app/constants/api_constants.dart';
// import 'package:flutter_bandung_bedas/app/environtment/app_env.dart';
// import 'package:flutter_bandung_bedas/app/helpers/error_helper.dart';
// import 'package:flutter_bandung_bedas/app/helpers/injection.dart';
// import 'package:flutter_bandung_bedas/app/routes/app_router.dart';
// import 'package:flutter_bandung_bedas/app/routes/app_router.gr.dart';
// import 'package:flutter_bandung_bedas/app/services/local_storage_service.dart';
// import 'package:flutter_bandung_bedas/core/entities/failures.dart';
// import 'package:flutter_bandung_bedas/features/auth/dtos/auth_dto.dart';
// import 'package:flutter_bandung_bedas/features/auth/models/renew_token.dart';
// import 'package:flutter_bandung_bedas/features/auth/models/sign_in.dart';
// import 'package:injectable/injectable.dart';

// class HttpResponse {
//   final bool success;
//   final String? message;
//   final dynamic data;

//   HttpResponse({
//     required this.success,
//     this.message,
//     Map<String, dynamic>? body,
//   }) : data = body?['data'];

//   @override
//   String toString() =>
//       'HttpResponse(statusCode: $success, message: $message, body: $data)';
// }

// @lazySingleton
// class ApiService {
//   ApiService() {
//     final dio = Dio(
//       BaseOptions(
//         baseUrl: getIt<AppEnv>().baseApiUrl,
//       ),
//     );
//     dio.interceptors.add(
//       InterceptorsWrapper(
//         onRequest: (options, handler) {
//           log(options.uri.toString());
//           log(options.headers.toString());
//           if (options.data is Map) log(jsonEncode(options.data));

//           return handler.next(options);
//         },
//         onResponse: (response, handler) {
//           log('Status code: ${response.statusCode}');
//           log(response.data.toString());
//           return handler.next(response);
//         },
//         onError: (error, handler) async {
//           log('Status code: ${error.response?.statusCode}');
//           if (error.response?.statusCode != 401) {
//             return handler.next(error);
//           }
//           final token = LocalStorageService.getToken();
//           if (token == null) {
//             return handler.next(error);
//           }
//           final (failure, response) = await post(
//             ApiEndpoints.renewToken,
//             body: RenewTokenDto(
//               refreshToken: token.refreshToken,
//             ).toJson(),
//           );
//           if (failure != null) {
//             await LocalStorageService.signOut();
//             await getIt<AppRouter>().pushAndPopUntil(
//               const SignInRoute(),
//               predicate: (route) => false,
//             );
//           }
//           final renewTokenResponse =
//               RenewTokenResponse.fromJson(response!.data!);
//           LocalStorageService.setToken(
//             Token.fromJson(renewTokenResponse.toJson()),
//           );
//         },
//       ),
//     );
//     _dio = dio;
//   }

//   late final Dio _dio;

//   Future<(Failure?, HttpResponse?)> get(
//     String path, {
//     Map<String, dynamic>? queryParams,
//     bool withToken = true,
//   }) async {
//     try {
//       final accessToken = LocalStorageService.getToken()?.token;

//       if (withToken) {
//         assert(accessToken != null, 'Access token is required');
//         _dio.options.headers['Authorization'] = 'Bearer $accessToken';
//       }
//       _dio.options.headers['Accept'] = 'application/json';

//       final response = await _dio.get<Map<String, dynamic>>(
//         path,
//         queryParameters: queryParams,
//       );
//       final httpResponse = HttpResponse(
//         success: response.statusCode! >= 200 && response.statusCode! < 300,
//         body: response.data,
//       );
//       return (null, httpResponse);
//     } on Exception catch (e, stackTrace) {
//       // final statusCode = e is DioException ? e.response?.statusCode : null;
//       final errorMessage = handleHttpError(e);
//       final failure = Failure(
//         errorMessage,
//         // code: statusCode,
//         error: e,
//         stackTrace: stackTrace,
//       );
//       return (failure, null);
//     }
//   }

//   Future<(Failure?, HttpResponse?)> post(
//     String path, {
//     Map<String, dynamic>? body,
//     bool withToken = true,
//     bool formData = false,
//   }) async {
//     try {
//       final accessToken = LocalStorageService.getToken()?.token;

//       if (withToken) {
//         assert(accessToken != null, 'Access token is required');
//         _dio.options.headers['Authorization'] = 'Bearer $accessToken';
//       }

//       final response = await _dio.post<Map<String, dynamic>>(
//         path,
//         options: Options(
//           headers: {
//             'Content-Type':
//                 formData ? 'multipart/form-data' : 'application/json',
//           },
//         ),
//         data: body != null ? (formData ? FormData.fromMap(body) : body) : null,
//       );

//       final httpResponse = HttpResponse(
//         success: response.statusCode! >= 200 && response.statusCode! < 300,
//         body: response.data,
//       );
//       return (null, httpResponse);
//     } on Exception catch (e, stackTrace) {
//       // final statusCode = e is DioException ? e.response?.statusCode : null;
//       final errorMessage = handleHttpError(e);
//       final failure = Failure(
//         errorMessage,
//         // code: statusCode,
//         error: e,
//         stackTrace: stackTrace,
//       );
//       return (failure, null);
//     }
//   }

//   Future<(Failure?, HttpResponse?)> put(
//     String url, {
//     Map<String, dynamic>? body,
//     bool withToken = true,
//     bool formData = true,
//   }) async {
//     try {
//       final accessToken = LocalStorageService.getToken()?.token;

//       if (withToken) {
//         assert(accessToken != null, 'Access token is required');
//         _dio.options.headers['Authorization'] = 'Bearer $accessToken';
//       }

//       final response = await _dio.put<Map<String, dynamic>>(
//         url,
//         data: body != null ? (formData ? FormData.fromMap(body) : body) : null,
//       );

//       final httpResponse = HttpResponse(
//         success: response.statusCode! >= 200 && response.statusCode! < 300,
//         body: response.data,
//       );

//       return (null, httpResponse);
//     } on Exception catch (e, stackTrace) {
//       // final statusCode = e is DioException ? e.response?.statusCode : null;
//       final errorMessage = handleHttpError(e);
//       final failure = Failure(
//         errorMessage,
//         // code: statusCode,
//         error: e,
//         stackTrace: stackTrace,
//       );
//       return (failure, null);
//     }
//   }

//   Future<(Failure?, HttpResponse?)> delete(
//     String url, {
//     bool withToken = true,
//   }) async {
//     try {
//       final accessToken = LocalStorageService.getToken()?.token;

//       if (withToken) {
//         assert(accessToken != null, 'Access token is required');
//         _dio.options.headers['Authorization'] = 'Bearer $accessToken';
//       }
//       _dio.options.headers['Accept'] = 'application/json';

//       final response = await _dio.delete<dynamic>(url);

//       final httpResponse = HttpResponse(
//         success: response.statusCode! >= 200 && response.statusCode! < 300,
//       );
//       return (null, httpResponse);
//     } on Exception catch (e, stackTrace) {
//       // final statusCode = e is DioException ? e.response?.statusCode : null;
//       final errorMessage = handleHttpError(e);
//       final failure = Failure(
//         errorMessage,
//         // code: statusCode,
//         error: e,
//         stackTrace: stackTrace,
//       );
//       return (failure, null);
//     }
//   }
// }
