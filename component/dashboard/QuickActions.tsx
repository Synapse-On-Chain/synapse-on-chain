import DashboardButton from "../shared/Button";

export default function QuickActions() {
    return (
        <div className="rounded-3xl p-6 border border-white/10 bg-white/5 backdrop-blur">
            <h3 className="text-lg font-semibold mb-1">Quick Actions</h3>
            <p className="text-sm text-[#D0BEF4] mb-6">
                Get started with your next learning goal
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
                <DashboardButton>
                    Browse Courses
                </DashboardButton>

                <DashboardButton variant="primary">
                    View Active Tasks
                </DashboardButton>

                <DashboardButton>
                    See Rankings
                </DashboardButton>

                <DashboardButton>
                    Check Rewards
                </DashboardButton>
            </div>
        </div>
    );
}
