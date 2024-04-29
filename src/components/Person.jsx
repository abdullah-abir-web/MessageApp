import react from "react"
function Person() {
  return (
    <div className="flex gap-4 ">
      <div>
        <img src="/user.png" alt="user" width={50} />
      </div>
      <div>
        <h2 className="font-semibold  text-xl font-secondary">Abdullah Abir</h2>
        <p className=" font-regular text-secondary text-sm font-secondary">Need Money.....</p>
      </div>
      <p className=" ml-auto font-regular text-secondary font-secondary text-3">10:30 PM</p>
    </div>
  );
}

export default Person;
