import "./Profile.css";

function Profile() {
  return (
    <div className="w-screen flex justify-center">
      <div className="flex flex-row items-center px-10 py-5">
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQGSO7wfzcNF4w/profile-displayphoto-scale_200_200/B56ZmWSPJKIAAY-/0/1759162988476?e=1761782400&v=beta&t=n3lmGCdcGOGsCkflcht5ilubEhG-dCf7ei64X7xpT-E"
          alt="Profile photo"
          className="profile-img shadow-xl border-1 border-[#201F1F] aspect-1/1 w-30 rounded-full mr-5 p-0 box-border outline-none"
        />
        <div>
          <p className="font-bold text-2xl">Tafara Katsande</p>
          <p className="text-sm">
            Email:{" "}
            <a
              className="link"
              href="mailto:tafara.k@outlook.com"
              target="_blank"
            >
              tafara.k@outlook.com
            </a>{" "}
            <br />
            Whatsapp:{" "}
            <a
              className="link"
              href="https://wa.me/27744572802"
              target="_blank"
            >
              +27 74 457 2802
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
