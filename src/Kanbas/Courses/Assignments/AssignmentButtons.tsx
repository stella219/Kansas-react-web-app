import { BsGripVertical } from 'react-icons/bs';
import { IoIosCreate } from 'react-icons/io';

export default function AssignmentControlButtons() {
    return (
        <div className="d-inline-flex align-items-center">
            <span className="me-1 position-relative" style={{ width: '24px', height: '24px' }}>
                <BsGripVertical
                    style={{ top: '2px', width: '24px', height: '24px' }}
                    className="position-absolute" 
                />
            </span>
            <IoIosCreate
                style={{ width: '24px', height: '24px' }}
                className="fs-4 text-success"
            />
        </div>
    );
}
