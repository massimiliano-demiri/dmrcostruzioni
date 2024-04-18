import React from 'react';

const CompanyInfo = () => {
    const companyInfo = {
        name: "Your Construction Company",
        yearFounded: 1965,
        mission: "To 'do well' and become a reliable reference for your most challenging projects.",
        stats: {
            asphaltPosato: "1.74 mila m³",
            binder: "183 mila m³",
            stratoDiBase: "117 mila m³",
            collaborators: "212 units",
            areasDemolite: "990 mila m³"
        },
        revenue2023: "58.3"
    };

    return (
        <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-semibold text-gray-800">{companyInfo.name}</h1>
                <div className="text-gray-600">
                    <p className="text-sm">Founded: {companyInfo.yearFounded}</p>
                    <p className="text-sm">Mission: {companyInfo.mission}</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Statistics</h2>
                    <ul className="list-inside space-y-1">
                        <li className="text-gray-600">Asphalt posato: {companyInfo.stats.asphaltPosato}</li>
                        <li className="text-gray-600">Binder: {companyInfo.stats.binder}</li>
                        <li className="text-gray-600">Strato di base: {companyInfo.stats.stratoDiBase}</li>
                        <li className="text-gray-600">Collaborators: {companyInfo.stats.collaborators}</li>
                        <li className="text-gray-600">Areas demolite: {companyInfo.stats.areasDemolite}</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Financial Data</h2>
                    <ul className="list-inside space-y-1">
                        <li className="text-gray-600">Revenue 2023: {companyInfo.revenue2023}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CompanyInfo;