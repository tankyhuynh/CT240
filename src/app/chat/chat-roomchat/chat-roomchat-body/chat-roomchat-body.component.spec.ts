import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomchatBodyComponent } from './chat-roomchat-body.component';

describe('ChatRoomchatBodyComponent', () => {
  let component: ChatRoomchatBodyComponent;
  let fixture: ComponentFixture<ChatRoomchatBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatRoomchatBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRoomchatBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
