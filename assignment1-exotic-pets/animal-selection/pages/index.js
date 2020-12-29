import Animals from '../public/animal-data/animals.json'
import Animal from './src/Animal.js'

export default function Home()
{
    //animal ->
    const animalCharacter = p => <Animal type={p.type} state={p.state} img={p.img} adoption_fee={p.adoption_fee}/>

    // All Exotic Pets, which are lizards and monkeys in this case from the list 
    const exoticPets = p => p.type == "lizard" || p.type == "monkey"
    const onlyExoticPets = Animals.filter(exoticPets) // Filters the exotic pets from the list

    const exoticPetsFormatted = onlyExoticPets.map(animalCharacter) // Takes the filtering function and maps out the result from the list

    const sumTogether = (x,y) => x + y.adoption_fee
    const totalExoticPetsPrice = onlyExoticPets.reduce(sumTogether, 0) // Reduce function adds all digits from the sumTogether into one value
    
    

    return (
        <div className = "bg-green-700 h-full text-black">
            <div className = "container mx-auto">
                <div className = "text-center">
                    <h1 className = "text-8xl"> Exotic Pets</h1>
                    <p>
                      Total to adopt all Exotic Pets: {"\u0024"}{totalExoticPetsPrice}
                    </p>
                    {exoticPetsFormatted}
                </div>
            </div>
        </div>
    )

}