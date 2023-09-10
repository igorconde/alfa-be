import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerCustomOptions, SwaggerModule } from '@nestjs/swagger';
import * as swaggerStats from 'swagger-stats';

export function setupSwagger(app: INestApplication, configService: ConfigService) {
    const config = new DocumentBuilder()
    .setTitle('Alfa Beta - API')
    .setDescription( `### REST

    Routes is following REST standard (Richardson level 3)
    
    <details><summary>Detailed specification</summary>
    <p>
    
    **List:**
      - \`GET /<resources>/\`
        - Get the list of **<resources>** as admin
      - \`GET /user/<user_id>/<resources>/\`
        - Get the list of **<resources>** for a given **<user_id>**
        - Output a **403** if logged user is not **<user_id>**
    
    **Detail:**
      - \`GET /<resources>/<resource_id>\`
        - Get the detail for **<resources>** of id **<resource_id>**
        - Output a **404** if not found
      - \`GET /user/<user_id>/<resources>/<resource_id>\`
        - Get the list of **<resources>** for a given **user_id**
        - Output a **404** if not found
        - Output a **403** if:
          - Logged user is not **<user_id>**
          - The **<user_id>** have no access to **<resource_id>**
    
    **Creation / Edition / Replacement / Suppression:**
      - \`<METHOD>\` is:
        - **POST** for creation
        - **PATCH** for update (one or more fields)
        - **PUT** for replacement (all fields, not used)
        - **DELETE** for suppression (all fields, not used)
      - \`<METHOD> /<resources>/<resource_id>\`
        - Create **<resources>** with id **<resource_id>** as admin
        - Output a **400** if **<resource_id>** conflicts with existing **<resources>**
      - \`<METHOD> /user/<user_id>/<resources>/<resource_id>\`
        - Create **<resources>** with id **<resource_id>** as a given **user_id**
        - Output a **409** if **<resource_id>** conflicts with existing **<resources>**
        - Output a **403** if:
          - Logged user is not **<user_id>**
          - The **<user_id>** have no access to **<resource_id>**
    </p>
    </details>`)
    .setVersion('1.0')
    .addServer('http://localhost:3001', 'Local Server') // Adiciona um servidor com a URL base da API
    .addServer('https://api.alfabeta.com', 'Production Server') // Adiciona um servidor com a URL base da API de produção
    .addTag('users', 'Operações relacionadas a usuários') // Adiciona uma tag com uma descrição para agrupar as rotas relacionadas a usuários
    .setContact(
      'Equipe Alfa Beta',
      'https://www.alfabeta.com.br',
      'contato@alfabeta.com.br', // Adiciona informações de contato para a equipe de desenvolvimento da API
    )
    .setLicense(
      'Apache 2.0',
      'https://www.apache.org/licenses/LICENSE-2.0.html', // Adiciona informações sobre a licença da API
    )
    .addApiKey({
      type: 'apiKey',
      name: 'X-API-KEY',
      in: 'header',
      description: 'API Key para autenticação',
    })
    .build();

    const customOptions: SwaggerCustomOptions = {
        customSiteTitle: 'Alfa Beta -  API Docs',
        customCss: '.swagger-ui .topbar { background-color: #007ACC }',
        customfavIcon: 'https://www.alfabeta.com.br/favicon.ico',
        swaggerOptions: {
          operationsSorter: 'alpha', // Ordena as operações alfabeticamente
          tagsSorter: 'alpha', // Ordena as tags alfabeticamente
          defaultModelsExpandDepth: -1, // Define o nível de profundidade em que os modelos são exibidos
          displayRequestDuration: true, // Exibe o tempo de resposta das requisições no Swagger UI
          filter: true, // Habilita a pesquisa e filtro na página do Swagger UI
          persistAuthorization: true, // Mantém as informações de autenticação ao atualizar a página
          showExtensions: true, // Exibe as extensões definidas na documentação
          showCommonExtensions: true, // Exibe as extensões comuns do Swagger
          deepLinking: true, // Habilita o deep linking na página do Swagger UI
          validatorUrl: null, // Define a URL do validador de esquema JSON para as requisições
          operationsSortKey: 'method', // Define o atributo usado para ordenar as operações
          plugins: [], // Define os plugins adicionais do Swagger UI
        },
      };

      const document = SwaggerModule.createDocument(app, config, {
        deepScanRoutes: true,
        // Ignora o prefixo global definido na aplicação
        ignoreGlobalPrefix: true,
        // Adiciona um arquivo CSS personalizado com o título da página
      });

      SwaggerModule.setup('api-docs', app, document, customOptions);

      app.use(swaggerStats.getMiddleware({ swaggerSpec: document }));
      
}
