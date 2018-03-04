export class Proposal {
  constructor(
    public id?: number,
    public customer?: string,
    public portfolio_url: string = 'http://github.com/elsilentforce',
    public tools?: string,
    public estimated_hours?: number,
    public hourly_rate?: number,
    public weeks_to_complete?: number,
    public client_email?: string
  ) {}
}

// 10, 'ASDF Company', 'http://testuser.portfolio', 'Ruby on Rails', 40, 1, 'testuser@testmail.test'
