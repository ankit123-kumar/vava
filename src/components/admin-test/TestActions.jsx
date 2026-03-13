import React from "react";
import {
    Pencil,
    Calendar,
    Users,
    Trash2
} from "lucide-react";

function TestActions() {

    const iconStyle =
        "w-4 h-4 cursor-pointer hover:scale-110 transition";

    return (
        <div className="flex items-center gap-3">

            <button title="Edit Test">
                <Pencil className="w-4 h-4 text-blue-600 hover:scale-110 transition" />
            </button>

            <button title="Schedule Test">
                <Calendar className="w-4 h-4 text-indigo-600 hover:scale-110 transition" />
            </button>

            <button title="Participants">
                <Users className="w-4 h-4 text-green-600 hover:scale-110 transition" />
            </button>

            <button title="Delete Test">
                <Trash2 className="w-4 h-4 text-red-600 hover:scale-110 transition" />
            </button>

        </div>
    );
}

export default TestActions;