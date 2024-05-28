import { IoEllipsisVertical } from "react-icons/io5";
import { FaCheckCircle, FaCircle } from 'react-icons/fa';

export default function AssignmentControlButtons() {
    return (
        <div className="d-inline-flex align-items-center text-success">
            <span className="me-1 position-relative" style={{ width: '24px', height: '24px' }}>
                <FaCheckCircle
                    style={{ top: '2px', width: '18px', height: '18px' }}
                    className="text-success position-absolute" 
                />
                <FaCircle
                    style={{ width: '24px', height: '24px' }}
                    className="text-white" 
                />
            </span>
            <IoEllipsisVertical
                style={{ width: '24px', height: '24px' }}
                className="fs-4"
            />
        </div>
    );
}
