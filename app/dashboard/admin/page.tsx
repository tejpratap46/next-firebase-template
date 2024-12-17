import { Text } from "@mantine/core";
import AuthGuard from "../../components/layouts/auth_guard";
import UserProfile from "../../components/user_profile";

export default function AdminDashboardPage() {
  return (
    <AuthGuard loadingFallback={<div>Loading...</div>}>
      <Text>This is admin page</Text>
      <UserProfile />
    </AuthGuard>
  );
}
