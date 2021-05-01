import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it ('add a message',()=>{
    // Arrange
    const msg1:string = "Logging1";
    const msg2:string = "Logging2";
    // Act
    service.add(msg1);
    service.add(msg2);
    expect(service.message.length).toBe(2);
  })
});
