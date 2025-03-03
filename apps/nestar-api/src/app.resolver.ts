import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
	@Query(() => String)
	public satHello(): string {
		return 'GraphQL API Server';
	}
}
