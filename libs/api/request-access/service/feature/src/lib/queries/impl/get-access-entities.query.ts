export class GetAccessEntitiesQuery {
	constructor(
		public readonly companyID: string,
		public readonly userID: string,
		public readonly itemID: string,
	) { }
}