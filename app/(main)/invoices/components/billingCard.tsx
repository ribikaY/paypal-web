interface BillingCardProps {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
}

const BillingCard = ({ icon, title, children }: BillingCardProps) => {
    return (
        <div className="w-full">
            <div className="flex items-center gap-6 py-6">
                {icon}
                <h2 className="text-xl font-medium">{title}</h2>
            </div>
            {children}
        </div>
    );
};

export default BillingCard;
