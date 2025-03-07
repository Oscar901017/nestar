import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { AppResolver } from './app.resolver';
import { ComponentsModule } from './components/components.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './componenets/auth/auth.module';
import { CommentModule } from './componenets/comment/comment.module';
import { LikeModule } from './componenets/like/like.module';
import { ViewModule } from './componenets/view/view.module';
import { FollowModule } from './componenets/follow/follow.module';
import { BoardArticleModule } from './componenets/board-article/board-article.module';

@Module({
	imports: [
		ConfigModule.forRoot(),
		GraphQLModule.forRoot({
			driver: ApolloDriver,
			playground: true,
			uploads: false,
			autoSchemaFile: true,
		}),
		ComponentsModule,
		DatabaseModule,
		AuthModule,
		CommentModule,
		LikeModule,
		ViewModule,
		FollowModule,
		BoardArticleModule,
	],
	controllers: [AppController],
	providers: [AppService, AppResolver],
})
export class AppModule {}
