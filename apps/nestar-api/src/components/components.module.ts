import { Module } from '@nestjs/common';
import { MemberModule } from './member/member.module';
import { PropertyModule } from './property/property.module';
import { AuthModule } from '../componenets/auth/auth.module';
import { BoardArticleModule } from '../componenets/board-article/board-article.module';
import { LikeModule } from '../componenets/like/like.module';
import { CommentModule } from '../componenets/comment/comment.module';
import { FollowModule } from '../componenets/follow/follow.module';
import { ViewModule } from '../componenets/view/view.module';
import { AuthService } from '../componenets/auth/auth.service';

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
	providers: [AuthService],
})
export class ComponentsModule {}
