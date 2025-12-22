import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useUserHook from "../../../../hooks/useUserHook";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../../components/LoadingSpinner";

const COLORS = ["#22d3ee", "#fbbf24", "#f87171"]; // example colors

const AnalyticsPieChart = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useUserHook();

  const { data, isLoading } = useQuery({
    queryKey: ["user-lesson-analytics", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/lessons/count/${user.email}`);
      return res.data.count;
    },
    enabled: !!user?.email,
  });

  if (isLoading) return <LoadingSpinner />;

  const chartData = [
    { name: "Your Lessons", value: data },
    { name: "Other Lessons", value: 10 }, // demo data, baki lessons
  ];

  return (
    <div className="bg-slate-800 rounded-2xl p-6 border border-gray-700">
      <h3 className="text-lg font-semibold text-white mb-4">
        Your Contributions
      </h3>

      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            innerRadius={40}
            outerRadius={80}
            paddingAngle={5}
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "none",
              borderRadius: "6px",
            }}
            labelStyle={{ color: "#f1f5f9" }}
            itemStyle={{ color: "#22d3ee" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsPieChart;
