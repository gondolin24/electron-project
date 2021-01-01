import React from "react";
import { Link } from "react-router-dom";

export default class Profile extends React.Component {
    render() {
        return (
            <div>
                <h1>This is my profile</h1>
                <Link to="/">Go back to home</Link>
                <div>
                    <img src="https://cdn2.onlyfans.com/files/0/0d/0dbfcf3898b7064bc4cd03d4e0c257d0/960x720_3a96d230de336189d57a478f0afc9bed.jpg?Tag=2&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6XC9cL2NkbjIub25seWZhbnMuY29tXC9maWxlc1wvMFwvMGRcLzBkYmZjZjM4OThiNzA2NGJjNGNkMDNkNGUwYzI1N2QwXC85NjB4NzIwXzNhOTZkMjMwZGUzMzYxODlkNTdhNDc4ZjBhZmM5YmVkLmpwZz9UYWc9MiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTYwOTU1Njk0Mn0sIklwQWRkcmVzcyI6eyJBV1M6U291cmNlSXAiOiIxNDIuMTEyLjE5OC4yNlwvMzIifX19XX0_&Signature=PkdOA6ciSU3GXlE0FkOnB937XDOEPwPLyO7Wg75xWdMJsoLB0EJQ~sbtctbXz5Iq~hNOR1azma~ahMoXu2iyicJDxNiiu5s9EFEi7K89LrsYxIuA9RWLtOSkdvrR84WJ~ibf2-x~oUs2aOIl35HXOdcmE9mKf2eyGOB-tXTJMdDqUzM2Kxw9s6Sh3hKY1eu6tgwJqXKtDVpB8wnrW1hA1vT2mpJhDOUFQmZ-dsvsJr1u~Bk1DUj9PqouV54eBZKiBKLVy6Zxe1zo3Z44J3IkfZDzxAFT4T7qcIVcgjQnUIrM-IQH0OYp7IIp8VUOTSvxux1GJqvivrdSQorvFT1EcQ__&Key-Pair-Id=APKAJZU4IULC2OKULHGA"></img>
                </div>
            </div>
        );
    }
}
