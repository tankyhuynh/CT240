import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomchatSendComponent } from './chat-roomchat-send.component';

describe('ChatRoomchatSendComponent', () => {
  let component: ChatRoomchatSendComponent;
  let fixture: ComponentFixture<ChatRoomchatSendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatRoomchatSendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRoomchatSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
