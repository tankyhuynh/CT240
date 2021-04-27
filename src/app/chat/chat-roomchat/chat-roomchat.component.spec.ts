import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomchatComponent } from './chat-roomchat.component';

describe('ChatRoomchatComponent', () => {
  let component: ChatRoomchatComponent;
  let fixture: ComponentFixture<ChatRoomchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatRoomchatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRoomchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
