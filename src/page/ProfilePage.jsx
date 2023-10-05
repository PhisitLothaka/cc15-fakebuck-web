import { useState, useEffect } from "react";
import ProfileInfo from "../features/profile/ProfileInfo";
import ProfileCover from "../features/profile/profileCover";
import { useParams } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import axios from "axios";

export default function ProfilePage() {
  const [profileUser, setProfileUser] = useState(null);
  const [statusWithAuthUser, setStatusWithAuthUser] = useState("");
  const [profileFriends, setProfilefriend] = useState([]);
  const { profileId } = useParams();

  const { authUser } = useAuth();
  const isAuthUser = authUser.id === +profileId;
  useEffect(() => {
    axios
      .get(`/user/${profileId}`)
      .then((res) => {
        setProfileUser(res.data.user);
        setStatusWithAuthUser(res.data.status);
        setProfilefriend(res.data.friends);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [profileId]);

  return (
    <div className="bg-gradient-to-b from-gray-200 to-white shadow pb-4">
      {profileUser ? (
        <>
          <ProfileCover
            coverImage={
              isAuthUser ? authUser.coverImage : profileUser?.coverImage
            }
          />
          <ProfileInfo
            profileUser={isAuthUser ? authUser : profileUser}
            statusWithAuthUser={statusWithAuthUser}
            setStatusWithAuthUser={setStatusWithAuthUser}
            profileFriends={profileFriends}
          />
        </>
      ) : (
        <h1 className="text-center p-8 ">404 !!! user not found</h1>
      )}
    </div>
  );
}
