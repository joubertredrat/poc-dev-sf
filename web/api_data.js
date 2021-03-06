define({ "api": [
  {
    "name": "Consult",
    "group": "Consult",
    "version": "0.1.0",
    "type": "get",
    "url": "/consulta?cpf=:number",
    "title": "Consulta de CPF",
    "description": "<p>Realiza consulta de um CPF na blacklist de acordo com o número informado.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>Número do CPF</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador do CPF.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>Número do CPF.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data de criação do registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data de atualização do registro.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 1,\n    \"number\": \"12345678900\",\n    \"createdAt\": \"2018-01-01 00:00:00\",\n    \"updatedAt\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/App/Controller/CpfBlacklistController.php",
    "groupTitle": "Consult"
  },
  {
    "name": "Delete",
    "group": "Delete",
    "version": "0.1.0",
    "type": "delete",
    "url": "/cpf/blacklist/{id}",
    "title": "Exclusão de CPF",
    "description": "<p>Exclui um CPF de acordo com o identificador informado.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador do CPF.</p>"
          }
        ]
      }
    },
    "filename": "src/App/Controller/CpfBlacklistController.php",
    "groupTitle": "Delete"
  },
  {
    "name": "Events",
    "group": "Events",
    "version": "0.1.0",
    "type": "get",
    "url": "/cpf/blacklist/events?sort=:sort&type=:type&cpf=:number",
    "title": "Consulta de eventos de CPF",
    "description": "<p>Realiza consulta de eventos de CPF na blacklist de acordo com os filtros informados.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"newer\"",
              "\"older\""
            ],
            "optional": false,
            "field": "sort",
            "description": "<p>Tipo de ordenação.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"consult\"",
              "\"list\"",
              "\"get\"",
              "\"add\"",
              "\"delete\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>Tipo de evento.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>Número do CPF.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "cpf",
            "description": "<p>Lista de eventos CPFs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador do evento CPF.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Tipo de evento.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>Número do CPF.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data de criação do registro.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"id\": 1,\n        \"type\": \"list\",\n        \"number\": \"12345678900\",\n        \"createdAt\": \"2018-01-01 00:00:00\"\n    },\n    {\n        \"id\": 2,\n        \"type\": \"consult\",\n        \"number\": null,\n        \"createdAt\": \"2018-01-01 00:00:00\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/App/Controller/CpfBlacklistEventController.php",
    "groupTitle": "Events"
  },
  {
    "name": "Get",
    "group": "Get",
    "version": "0.1.0",
    "type": "get",
    "url": "/cpf/blacklist/{id}",
    "title": "Requisição de CPF",
    "description": "<p>Requisita um CPF de acordo com o identificador informado.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador do CPF</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador do CPF.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>Número do CPF.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data de criação do registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data de atualização do registro.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 1,\n    \"number\": \"12345678900\",\n    \"createdAt\": \"2018-01-01 00:00:00\",\n    \"updatedAt\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/App/Controller/CpfBlacklistController.php",
    "groupTitle": "Get"
  },
  {
    "name": "List",
    "group": "List",
    "version": "0.1.0",
    "type": "get",
    "url": "/cpf/blacklist",
    "title": "Listagem de CPFs",
    "description": "<p>Listagem dos CPFs na blacklist.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "cpf",
            "description": "<p>Lista de CPFs.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador do CPF.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>Número do CPF.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data de criação do registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data de atualização do registro.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"id\": 1,\n        \"number\": \"12345678900\",\n        \"createdAt\": \"2018-01-01 00:00:00\",\n        \"updatedAt\": null\n    },\n    {\n        \"id\": 2,\n        \"number\": \"98765432100\",\n        \"createdAt\": \"2018-01-01 00:00:00\",\n        \"updatedAt\": null\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/App/Controller/CpfBlacklistController.php",
    "groupTitle": "List"
  },
  {
    "name": "Post",
    "group": "Post",
    "version": "0.1.0",
    "type": "post",
    "url": "/cpf/blacklist",
    "title": "Cadastrado de CPF",
    "description": "<p>Realiza o cadastro de um CPF de acordo com os parametros informados.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>Número do CPF.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"number\": \"12345678900\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador do CPF.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>Número do CPF.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Data de criação do registro.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Data de atualização do registro.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 1,\n    \"number\": \"12345678900\",\n    \"createdAt\": \"2018-01-01 00:00:00\",\n    \"updatedAt\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/App/Controller/CpfBlacklistController.php",
    "groupTitle": "Post"
  },
  {
    "name": "Status",
    "group": "Status",
    "version": "0.1.0",
    "type": "get",
    "url": "/status",
    "title": "",
    "description": "<p>Status do sistema.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"uptime\": \" 00:26:54 up 2 days, 13:26,  1 user,  load average: 0,97, 0,79, 1,04\\n\",\n    \"cpfBlacklistCount\": 1,\n    \"eventsCount\": {\n        \"consult\": 11,\n        \"list\": 2,\n        \"get\": 2,\n        \"add\": 2,\n        \"delete\": 2\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/App/Controller/StatusController.php",
    "groupTitle": "Status"
  }
] });
