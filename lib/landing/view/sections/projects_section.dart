import 'package:flutter/material.dart';
import 'package:flutter_azlir/app/constants/constant.dart';
import 'package:flutter_azlir/landing/models/project.dart';
import 'package:flutter_azlir/landing/widgets/continuous_project_listview.dart';

const projects = [
  Project(
    id: '16c9bf86-74c6-4125-991c-92fb9499d6b9',
    name: 'OutClass API',
    description: '''
**OutClass API**

I developed the OutClass API, a RESTful API that provides a backend for the OutClass app. The API is built using GoFiber, MongoDB, and Redis.

The API includes endpoints for the following:

* **User management:** Creating, updating, and deleting users.
* **Classroom management:** Creating, updating, and deleting classrooms.
* **Task management:** Creating, updating, and deleting tasks.
* **Event management:** Creating, updating, and deleting events.
* **File management:** Uploading, downloading, and deleting files.

The API is easy to use and well-documented. It is also scalable and reliable.

The development of the OutClass API demonstrates the following skills:

* **Go development:** I used GoFiber to build the OutClass API. GoFiber is a high-performance and scalable web framework that is well-suited for building APIs.
* **MongoDB:** I used MongoDB to store data in the OutClass API. MongoDB is a flexible and scalable database that is a good choice for storing data in APIs.
* **Redis:** I used Redis to store JWT tokens in the OutClass API. Redis is a fast and reliable key-value store that is a good choice for storing short-lived data.
* **RESTful API development:** I developed the OutClass API in accordance with the RESTful API architectural style. This makes the API easy to use and understand.

I am proud of the work that I did on the OutClass API, and I believe that it demonstrates my skills as a software developer. I am confident that my skills and experience in developing the OutClass API would be a valuable asset to any team.
''',
    shortDescription:
        'The OutClass API is a RESTful API that provides a backend for the OutClass app, built using GoFiber, MongoDB, and Redis.',
    sourceCode: 'https://github.com/azliR/gofiber_outclass-api',
    visits: [
      'https://god.gw.postman.com/run-collection/8199375-ab9fdf9c-b168-4865-86d4-7517b3df9509?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D8199375-ab9fdf9c-b168-4865-86d4-7517b3df9509%26entityType%3Dcollection%26workspaceId%3D0e796c68-046f-4e51-a7f8-b80bb0834952',
    ],
    tags: ['Go', 'MongoDB', 'Redis', 'RESTful API'],
    images: [
      '$baseCdnUrl/gofiber_outclass-api/gofiber_outclass-api-0.webp',
      '$baseCdnUrl/gofiber_outclass-api/gofiber_outclass-api-1.webp',
    ],
    vertical: false,
  ),
  Project(
    id: 'ad77825f-158d-4515-b58e-142dc4e8102d',
    name: 'Dart Restaurant API',
    description: '''
**Dart Restaurant API**

I developed the Dart Restaurant API, a RESTful API that provides a backend for the Restaurant App. The API includes endpoints for user authentication, nearby stores, special offers, orders, item subdirectories, item categories, items, and stores.

The API was built using Dart, the shelf package, PostgreSQL, Firebase, Redis, and JWT.

**Features**

* User authentication
* Nearby stores
* Special offers
* Orders
* Item subdirectories
* Item categories
* Items
* Stores

**Benefits**

* The API is scalable and reliable.
* The API is secure and uses industry-standard security protocols.

**Skills demonstrated**

The development of the Dart Restaurant API demonstrates the following skills:

* Dart development
* RESTful API development
* PostgreSQL database development
* Firebase development
* Redis development
* JWT development

**Conclusion**

The Dart Restaurant API is a valuable tool for anyone who wants to develop a restaurant app. The API is easy to use and it is scalable and reliable. I am proud of the work that I did on the Dart Restaurant API, and I believe that it demonstrates my skills as a software developer.

I am happy to share more details about the Dart Restaurant API if you are interested.
''',
    shortDescription:
        'API for Restaurant App built with Dart with Shelf package',
    tags: [
      'Dart',
      'Shelf',
      'PostgreSQL',
      'Firebase',
      'Redis',
      'JWT',
      'RESTful API',
    ],
    images: [
      '$baseCdnUrl/dart_restaurant-api/dart_restaurant-api-0.webp',
      '$baseCdnUrl/dart_restaurant-api/dart_restaurant-api-1.webp',
    ],
    documents: {
      'Progress': 'https://github.com/azliR/IF214002',
    },
    vertical: true,
  ),
];

class ProjectsSection extends StatelessWidget {
  const ProjectsSection({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        const SizedBox(height: 32),
        ContinuousProjectListView(
          projects: projects,
        ),
        const SizedBox(height: 16),
      ],
    );
  }
}
