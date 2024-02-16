# UAT-testing

├── src/
│   ├── config/
│   │   └── index.ts
│   ├── controllers/
│   │   ├── userController.ts
│   │   ├── authController.ts
│   │   └── auditController.ts
│   ├── models/
│   │   ├── userModel.ts
│   │   ├── roleModel.ts
│   │   └── permissionModel.ts
│   ├── middleware/
│   │   ├── authMiddleware.ts
│   │   ├── permissionMiddleware.ts
│   │   ├── uatMiddleware.ts
│   │   └── auditMiddleware.ts
│   ├── services/
│   │   ├── userService.ts
│   │   ├── authService.ts
│   │   ├── permissionService.ts
│   │   └── auditService.ts
│   ├── routes/
│   │   ├── userRoutes.ts
│   │   ├── authRoutes.ts
│   │   └── auditRoutes.ts
│   ├── utils/
│   │   ├── jwtUtil.ts
│   │   ├── passwordUtil.ts
│   │   ├── loggerUtil.ts
│   │   └── testDataUtil.ts
│   └── index.ts
├── test/
│   ├── user.test.ts
│   ├── auth.test.ts
│   └── audit.test.ts
├── .env
├── .env.test
├── package.json
├── tsconfig.json
└── README.md
