{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };
  outputs = { self, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
          config = {
            android_sdk.accept_license = true;
            allowUnfree = true;
          };
        };
        buildToolsVersionForAapt2 = "34.0.0";
        androidComposition = pkgs.androidenv.composeAndroidPackages {
          cmdLineToolsVersion = "13.0";
          buildToolsVersions = [ buildToolsVersionForAapt2 "30.0.3" ];
          platformVersions = [ "34" "33" "32" "31" ];
          abiVersions = [ "arm64-v8a" ];
          includeEmulator = false;
          includeSources = false;
          includeSystemImages = false;
          includeNDK = false;
          useGoogleAPIs = false;
          useGoogleTVAddOns = false;
        };
        androidSdk = androidComposition.androidsdk;
        androidPlatformTools = androidComposition.platform-tools;

      in
      {
        devShell =
          with pkgs; mkShell rec {
            buildInputs = [
              flutter322
              jdk17
              androidPlatformTools
            ];
            ANDROID_SDK_ROOT = "${androidSdk}/libexec/android-sdk";
            GRADLE_OPTS = "-Dorg.gradle.project.android.aapt2FromMavenOverride=${androidSdk}/libexec/android-sdk/build-tools/${buildToolsVersionForAapt2}/aapt2";
          };
      });
}
