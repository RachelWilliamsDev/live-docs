declare type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

declare type UserType = "creator" | "editor" | "viewer";

declare type CreateDocumentParams = {
  userId: string;
  email: string;
};

declare type RoomAccesses = Record<string, AccessType>;

declare type AddDocumentBtnProps = {
  userId: string;
  email: string;
};

declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

declare type RoomMetadata = {
  creatorId: string;
  email: string;
  title: string;
};

declare type CollaborativeRoomProps = {
  roomId: string;
  roomMetadata: RoomMetadata;
  users: User[];
  currentUserType: UserType;
};

declare type UsersAccesses = Record<string, string[]>;

declare type RoomDocumentProps = {
  id: string;
  metadata: RoomMetadata;
  createdAt: string;
  usersAccesses: UsersAccesses;
};

declare type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  color: string;
  userType?: UserType;
};

declare type ThreadWrapperProps = { thread: ThreadData<BaseMetadata> };

declare type ShareDocumentDialogProps = {
  roomId: string;
  collaborators: User[];
  creatorId: string;
  currentUserType: UserType;
};

declare type UserTypeSelectorParams = {
  userType: string;
  setUserType: React.Dispatch<React.SetStateAction<UserType>>;
  onClickHandler?: (value: string) => void;
};

declare type CollaboratorProps = {
  roomId: string;
  email: string;
  creatorId: string;
  collaborator: User;
  user: User;
};

declare type ShareDocumentParams = {
  roomId: string;
  email: string;
  userType: UserType;
  updatedBy: User;
};

declare type AccessType = ["room:write"] | ["room:read", "room:presence:write"];

declare type DeleteModalProps = { roomId: string };
