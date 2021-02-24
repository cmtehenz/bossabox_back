/* eslint-disable import/prefer-default-export */
export const swaggerDocument = {
  swagger: '2.0',
  info: {
    description: 'Este arquivo documento o desafio backend da bossabox.',
    version: '1.0.0',
    title: 'Bossabox Desafio',
    termsOfService: 'http://swagger.io/terms/',
    contact: {
      email: 'cmtehenz@gmail.com',
    },
    license: {
      name: 'Apache 2.0',
      url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  host: 'template.swagger.io',
  basePath: '/v2',

  tags: [
    {
      name: 'Password',
      description: 'Reseta a senha do usuário',
      externalDocs: {
        description: 'Find out more',
        url: 'http://swagger.io',
      },
    },
    {
      name: 'User',
      description: 'Ultiliza para cadastrar, alterar dados do usuário',
      externalDocs: {
        description: 'Find out more',
        url: 'http://swagger.io',
      },
    },
  ],

  schemes: ['https'],

  paths: {
    '/password/forgot': {
      post: {
        tags: ['Password'],
        summary: 'Esqueceu a senha',
        description: 'Inicia o processo de resetar a senha ',
        operationId: 'forgotPassword',
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Envia email para usuario',
            required: true,
            schema: {
              $ref: '#/definitions/Password',
            },
          },
        ],
        responses: {
          '204': {
            description: 'No Content!',
          },
          '400': {
            description: 'These parameters are required: email!',
          },
        },
      },
    },

    '/password/reset': {
      post: {
        tags: ['Password'],
        summary: 'Resetar a senha',
        description:
          'Após usar a rota forgot o usuario recebe um token em seu email',
        operationId: 'resetPassword',
        produces: ['application/json'],
        parameters: [
          {
            name: 'body',
            in: 'body',
            required: true,
            schema: {
              $ref: '#/definitions/ResetPassword',
            },
          },
        ],
        responses: {
          '204': {
            description: 'No Content!',
          },
          '400': {
            description: 'Bad Request',
            schema: {
              $ref: '#/definitions/ErrorToken',
            },
          },
        },
      },
    },

    '/users': {
      post: {
        tags: ['User'],
        summary: 'Registrar usuário',
        description: 'Cria um novo usuário para o sistema',
        operationId: 'createUser',
        produces: ['application/json'],
        parameters: [
          {
            name: 'body',
            in: 'body',
            required: true,
            schema: {
              $ref: '#/definitions/User',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Ok',
            schema: {
              $ref: '#/definitions/UserResponse',
            },
          },
          '400': {
            description: 'Bad Request',
            schema: {
              $ref: '#/definitions/ErrorUserEmail',
            },
          },
        },
      },
    },

    '/sessions': {
      post: {
        tags: ['User'],
        summary: 'Inicia a sessão do usuario',
        operationId: 'authenticate',
        produces: ['application/json'],
        parameters: [
          {
            name: 'body',
            in: 'body',
            required: true,
            schema: {
              $ref: '#/definitions/UserAuthenticate',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Ok',
            schema: {
              $ref: '#/definitions/UserResponse',
            },
          },
          '400': {
            description: 'Bad Request',
            schema: {
              $ref: '#/definitions/ErrorUserEmail',
            },
          },
        },
      },
    },

    '/profile/show': {
      get: {
        tags: ['User'],
        summary: 'Mostra dados do usuario logado',
        description:
          'Mostra dados do usuario logado atraves de um token enviado como Bearer',
        operationId: 'profileShow',
        produces: ['application/json'],
        parameters: [
          {
            name: 'token',
            in: 'bearer',
            required: true,
            type: 'string',
            example:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDc0NTE4MjgsImV4cCI6MTYxMDEzMDIyOCwic3ViIjoiZGY5YjQ0OGUtOTUwMy00ZDNmLWI5MDAtNDlkYTBmOGEwMjkyIn0.-LCGB3MCKQYWTaQCepsy5lqz7aMDnvDQTCxc3wjt9TU',
          },
        ],
      },
    },

    '/profile/update': {
      put: {
        tags: ['User'],
        summary: 'Atualiza dados do usúario',
        description:
          'Atualiza dados do usuario logado atraves de um token enviado como Bearer',
        operationId: 'profileUpdate',
        produces: ['application/json'],
        parameters: [
          {
            name: 'token',
            in: 'bearer',
            required: true,
            type: 'string',
            example:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDc0NTE4MjgsImV4cCI6MTYxMDEzMDIyOCwic3ViIjoiZGY5YjQ0OGUtOTUwMy00ZDNmLWI5MDAtNDlkYTBmOGEwMjkyIn0.-LCGB3MCKQYWTaQCepsy5lqz7aMDnvDQTCxc3wjt9TU',
          },
          {
            name: 'body',
            in: 'body',
            required: false,
            schema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  example: 'John Due',
                },
                email: {
                  type: 'string',
                  example: 'johndue@example.com',
                },
              },
            },
          },
        ],
      },
    },

    '/users/avatar': {
      patch: {
        tags: ['User'],
        summary: 'Atualiza avatar do usúario',
        description:
          'Atualiza avatar do usuario logado atraves de um token enviado como Bearer',
        operationId: 'avatarUpdate',
        produces: ['application/json'],
        parameters: [
          {
            name: 'token',
            in: 'bearer',
            required: true,
            type: 'string',
            example:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDc0NTE4MjgsImV4cCI6MTYxMDEzMDIyOCwic3ViIjoiZGY5YjQ0OGUtOTUwMy00ZDNmLWI5MDAtNDlkYTBmOGEwMjkyIn0.-LCGB3MCKQYWTaQCepsy5lqz7aMDnvDQTCxc3wjt9TU',
          },
          {
            name: 'multipart',
            in: 'multipart/form-data',
            required: true,
            schema: {
              type: 'object',
              properties: {
                fileName: {
                  type: 'string',
                  format: 'binary',
                },
              },
            },
          },
        ],
      },
    },
  },

  definitions: {
    Password: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
          example: 'johndue@email.com',
        },
      },
    },

    ResetPassword: {
      type: 'object',
      properties: {
        token: {
          type: 'string',
          example: '945e7c59-2fef-4446-90ba-68dc28d4cf46',
        },
        password: {
          type: 'string',
          example: 'secret',
        },
        password_confirmation: {
          type: 'string',
          example: 'secret',
        },
      },
    },

    ErrorToken: {
      type: 'object',
      properties: {
        status: {
          type: 'string',
          example: 'error',
        },
        message: {
          type: 'string',
          example: 'User token not found',
        },
      },
    },

    ErrorUserEmail: {
      type: 'object',
      properties: {
        status: {
          type: 'string',
          example: 'error',
        },
        message: {
          type: 'string',
          example: 'Email address already used.',
        },
      },
    },

    User: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          example: 'John Due',
        },
        email: {
          type: 'string',
          example: 'johndue@example.com',
        },
        password: {
          type: 'string',
          example: 'secret',
        },
      },
    },

    UserResponse: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          example: 'cc781bf0-4244-5f12-b8f2-6cbbfd519b4f',
        },
        name: {
          type: 'string',
          example: 'John Due',
        },
        email: {
          type: 'string',
          example: 'johndue@example.com',
        },
        avatar_url: {
          type: null,
          example: null,
        },
        created_at: {
          type: 'date',
          example: '2020-12-08T21:23:44.180Z',
        },
        updated_at: {
          type: 'date',
          example: '2020-12-08T21:23:44.180Z',
        },
      },
    },

    UserAuthenticate: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
          example: 'johndue@example.com',
        },
        password: {
          type: 'string',
          example: 'secret',
        },
      },
    },
  },

  externalDocs: {
    description: 'Find out more about Swagger',
    url: 'http://swagger.io',
  },
};
