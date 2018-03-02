import { Component } from '@angular/core'
import { Document } from './documents'

@Component({
  moduleId: module.id,
  selector: 'component',
  templateUrl: 'documents.component.html'
})

export class DocumentsComponent {
  documents: Document[] = [
    {
      title: 'My First Document',
      description: 'sadasdasdasdas asdasdasdas.',
      file_url: 'google.com',
      updated_at: '01-01-2018',
      image_url: 'google.com'
    },
    {
      title: 'My Second Document',
      description: 'sadasdasdasdas asdasdasdas.',
      file_url: 'google.com',
      updated_at: '01-01-2018',
      image_url: 'google.com'
    },
    {
      title: 'My Third Document',
      description: 'sadasdasdasdas asdasdasdas.',
      file_url: 'google.com',
      updated_at: '01-01-2018',
      image_url: 'google.com'
    },
  ]
}
