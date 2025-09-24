import "./Profile.css";

function Profile() {
  return (
    <div className="w-screen flex justify-center">
      <div className="flex flex-row items-center px-10 py-5">
        <img className="profile-img border-1 border-[#7584FE] shadow-md aspect-1/1 w-20 rounded-full mr-5 p-0 box-border outline-none" />
        <div>
          <p className="font-bold text-2xl">John Doe</p>
          <p className="text-xs">
            Email: example@email.com <br />
            WhatsApp: +27 74 457 2802
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
