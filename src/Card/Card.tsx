import './Card.css'

type CardProps = {
    title: string;
    description: string;
    assignedTo: string;
    startDate: string;
    dueDate: string;
}

const Card = ({ title, description, assignedTo, startDate, dueDate }: CardProps) => {
    return (
        <div className='card'>
            <h2>{title}</h2>
            <p className="description">{description}</p>
            <p>Assigned to: {assignedTo}</p>
            <p>Start date: {startDate}</p>
            <p>Due date: {dueDate}</p>
        </div>
    );
}

export default Card;