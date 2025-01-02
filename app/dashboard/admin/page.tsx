import AuthGuard from "@/app/components/layouts/auth_guard";
import UserProfile from "@/app/components/user_profile";

export default function AdminDashboardPage() {
    return (
        <AuthGuard loadingChildren={<div>Loading...</div>}
                   loggedInChildren={<>
                       <UserProfile/>
                   </>}
                   notLoggedInChildren={<p>Not logged in</p>}/>
    );
}
