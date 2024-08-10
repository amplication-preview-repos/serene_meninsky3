import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { RoleModule } from "./role/role.module";
import { ProfileModule } from "./profile/profile.module";
import { PlayerModule } from "./player/player.module";
import { GameActionModule } from "./gameAction/gameAction.module";
import { PlayerLocationModule } from "./playerLocation/playerLocation.module";
import { PlayerGroupModule } from "./playerGroup/playerGroup.module";
import { LocationModule } from "./location/location.module";
import { GroupModule } from "./group/group.module";
import { GameActionModuleModule } from "./gameactionmodule/gameactionmodule.module";
import { GameActionServiceModule } from "./gameactionservice/gameactionservice.module";
import { GroupDomainServiceModule } from "./groupdomainservice/groupdomainservice.module";
import { GroupModuleModule } from "./groupmodule/groupmodule.module";
import { GroupRepositoryModule } from "./grouprepository/grouprepository.module";
import { LocationDomainServiceModule } from "./locationdomainservice/locationdomainservice.module";
import { LocationModuleModule } from "./locationmodule/locationmodule.module";
import { LocationRepositoryModule } from "./locationrepository/locationrepository.module";
import { PlayerDomainServiceModule } from "./playerdomainservice/playerdomainservice.module";
import { PlayerModuleModule } from "./playermodule/playermodule.module";
import { PlayerRepositoryModule } from "./playerrepository/playerrepository.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { KafkaModule } from "./kafka/kafka.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    KafkaModule,
    UserModule,
    RoleModule,
    ProfileModule,
    PlayerModule,
    GameActionModule,
    PlayerLocationModule,
    PlayerGroupModule,
    LocationModule,
    GroupModule,
    GameActionModuleModule,
    GameActionServiceModule,
    GroupDomainServiceModule,
    GroupModuleModule,
    GroupRepositoryModule,
    LocationDomainServiceModule,
    LocationModuleModule,
    LocationRepositoryModule,
    PlayerDomainServiceModule,
    PlayerModuleModule,
    PlayerRepositoryModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
