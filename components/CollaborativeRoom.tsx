"use client";
import { Editor } from "@/components/editor/Editor";
import Header from "@/components/Header";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ClientSideSuspense, RoomProvider } from "@liveblocks/react/suspense";
import ActiveCollaborators from "./ActiveCollaborators";
import Loader from "./Loader";

const CollaborativeRoom = ({
  roomId,
  roomMetadata,
}: CollaborativeRoomProps) => {
  console.log(roomMetadata);
  return (
    <RoomProvider id={roomId}>
      <ClientSideSuspense fallback={<Loader />}>
        <div className="collaborative-room">
          <Header>
            <div className="flex w-fit items-center justify-center gap-2">
              <p className="document-title">Share</p>
            </div>
            <div className="flex w-full flex-1 justify-end gap-2 sm:gap-3">
              <ActiveCollaborators />
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </Header>
          <Editor />
        </div>
      </ClientSideSuspense>
    </RoomProvider>
  );
};
export default CollaborativeRoom;