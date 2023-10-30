export default function CoffeeCard() {
    return (
        <div className="coffee-card">
            <h3>{coffee.name}</h3>
            <p>{coffee.description}</p>
        </div>
    )
}