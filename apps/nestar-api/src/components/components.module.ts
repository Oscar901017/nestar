import { Module } from '@nestjs/common';
import { MemberModule } from './member/member.module';
import { PropertyModule } from './property/property.module';
import { AuthModule } from './auth/auth.module';
import { LikeModule } from './like/like.module';
import { CommentModule } from './comment/comment.module';
import { FollowModule } from './follow/follow.module';
import { ViewModule } from './property/view.module';
import { BoardArticleResolver } from './board-article/board-article.resolver';
import { BoardArticleModule } from './board-article/board-article.module';

@Module({
	imports: [
		MemberModule,
		AuthModule,
		PropertyModule,
		BoardArticleModule,
		LikeModule,
		CommentModule,
		FollowModule,
		ViewModule,
	],
	providers: [BoardArticleResolver],
})
export class ComponentsModule {}
