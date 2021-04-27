import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomchatHeaderComponent } from './chat-roomchat-header.component';

describe('ChatRoomchatHeaderComponent', () => {
  let component: ChatRoomchatHeaderComponent;
  let fixture: ComponentFixture<ChatRoomchatHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatRoomchatHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRoomchatHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
