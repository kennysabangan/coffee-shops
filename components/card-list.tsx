import Link from 'next/link';

async function getCoffeeStores() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'fsq34AmO+CA4iXtiHVUXFLQPlssz25ZsKeMrSKqxM5Lqrag='
    }
  };

  const res = await fetch('https://api.foursquare.com/v3/places/search?query=coffee%20shops&ll=33.796110163743606%2C-117.88923146588185&limit=6', options)

  if (!res.ok) {
    throw new Error('Faield to fetch data');
  }

  return res.json()
}

interface CoffeeStore {
  fsq_id: string;
  name: string;
  neighborhood: string;
  img_url: string;
}

export default async function CardList() {
    const coffeeStoresData = await getCoffeeStores();
    console.log(coffeeStoresData);

    return (coffeeStoresData.results.length > 0 &&
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Toronto Stores</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover local coffee shops near you here!
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {coffeeStoresData.results.map((coffeeStore: CoffeeStore) => (
              <li key={coffeeStore.fsq_id} className="opacity-85 hover:opacity-100">
                <Link href={`/coffee-shops/${coffeeStore.fsq_id}`}>
                    <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={coffeeStore.img_url || "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"} alt="" />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{coffeeStore.name}</h3>
                </Link>
                <p className="text-base leading-7 text-gray-600">{coffeeStore.neighborhood}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }