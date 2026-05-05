const Other = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row md:justify-between item-center mt-10 gap-10'>
        <div className='card1 md:w-[50%] md:aspect-square flex grow flex-col justify-start gap-2 items-start rounded-xl'>
          <h4 className='text-gray-600 font-semibold'>USD bloom in Action</h4>
          <h2 className='text-3xl font-normal mb-8'>Use Cases</h2>
          <h4 className='w-[80%] text-[20px] font-medium text-gray-600'>USD bloom offers a variety of use cases for developers, businesses and treasuries seeking secure and profitable stablecoin integrations</h4>
        </div>
        <div className='card2 md:aspect-square md:w-[50%] flex grow flex-col justify- items-start gap-2-start bg-[url("/building.png")] bg-bottom-right bg-cover p-5 rounded-xl'>
          <h2 className='text-3xl font-normal mt-2 mb-8'>Business</h2>
          <h4 className='w-[80%] text-[20px] font-medium text-gray-600 mb-5'>Boost user engagement by offering USD bloom, a secure fiat-backed stablecoin with high yields, allowing your customers to earn effortlessly on your platform.</h4>
          <h4 className='text-gray-600 font-bold flex items-center gap-2'><i class="ri-arrow-right-long-line text-gray-600 bg-gray-200 flex h-10 w-10 items-center justify-center rounded-full"></i>Learn more</h4>
        </div>
      </div>
      <div className='h-10'></div>
    </div>
  )
}

export default Other