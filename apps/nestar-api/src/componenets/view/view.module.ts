import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ViewService } from './view.service';
import ViewSchema from '../../schemas/View.model';

@Module({
	imports: [MongooseModule.forFeature([{ name: 'view', schema: ViewSchema }])],
	providers: [ViewService,ViewModule],
	exports: [ViewService],
})
export class ViewModule {}
