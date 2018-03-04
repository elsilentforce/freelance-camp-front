import { Component } from '@angular/core'
import { Proposal } from './proposal'

@Component({
  moduleId: module.id,
  templateUrl: 'proposal-list.component.html',
  selector: 'proposal-list'
})

export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(10, 'ASDF Company', 'http://testuser.portfolio', 'Ruby on Rails', 40, 100, 1, 'testuser@testmail.test')
  proposalTwo: Proposal = new Proposal(11, 'Another Company', 'http://testuser.portfolio', 'Ruby on Rails', 40, 100, 1, 'testuser@testmail.test')
  proposalThree: Proposal = new Proposal(10, 'Not the same Company', 'http://testuser.portfolio', 'Ruby on Rails', 40, 100, 1, 'testuser@testmail.test')

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
}
