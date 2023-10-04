<template>
    <section id="statistics" class="bg-light-violet">
        <div class="w-[90%] max-w-[1110px] mx-auto pb-14">
            <div class=" max-w-[530px] mx-auto text-center">
                <h3 class="text-very-dark-blue font-bold text-2xl md:text-3xl mb-4">Advanced Statistics</h3>
                <h4 class="text-grayish-violet md:text-lg leading-[1.85]">Track how your links are performing across the web with our advanced statistics dashboard.</h4>
            </div>
            <div class="flex flex-col md:flex-row gap-12 md:gap-8 relative" data-aos="fade-up" data-aos-duration="800">
                <StatisticsCard :item="statItems.brandRegconition.item" :description="statItems.brandRegconition.description">
                    <IconBrandRecognition />
                </StatisticsCard>
                <StatisticsCard :item="statItems.detailedRecords.item" :description="statItems.detailedRecords.description" class="md:mt-10">
                    <IconDetailedRecords />
                </StatisticsCard>
                <StatisticsCard :item="statItems.fullyCustomizable.item" :description="statItems.fullyCustomizable.description" class="md:mt-20">
                    <IconFullyCustomizable />
                </StatisticsCard>
                <div class="absolute bg-cyan w-2 h-full md:w-full md:h-2 left-1/2 top-0 -translate-x-1/2 md:left-0 md:top-1/2 md:translate-x-0"></div>
            </div>
        </div>
    </section>
</template>

<script setup>
const statItems = {
    brandRegconition: {
        item: 'Brand Regconition',
        description: 'Boost your brand recognition with each click. Generic links don’t, mean a thing. Branded links help instil confidence in your content.'
    },
    detailedRecords: {
        item: 'Detailed Records',
        description: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
    },
    fullyCustomizable: {
        item: 'Fully Customizable',
        description: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
    }
}
</script>