<script setup>
import { GoogleMap, Polyline } from 'vue3-google-map'
const center = { lat: 0, lng: -180 }
const flightPlanCoordinates = [
    { lat: 37.772, lng: -122.214 },
    { lat: 21.291, lng: -157.821 },
    { lat: -18.142, lng: 178.431 },
    { lat: -27.467, lng: 153.027 },
]
const flightPath = {
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2,
}
</script>
<template>
        <h1 class="font-bold text-xl">Select address</h1>
        <div class="h-screen mt-3">
            <GoogleMap api-key="AIzaSyBb3OXwJXtv5sZDs41n9UWSCJW6ZV63LBI" style="width: 100%; height: 500px"
                :center="center" :zoom="3">
                <Polyline :options="flightPath" />
            </GoogleMap>
            <div ref="searchBox" class="absolute top-4 left-4 z-10 bg-white p-2 rounded shadow-md" id="input">
                <input id="input" class="w-full p-2 border border-gray-300 rounded" type="text"
                    placeholder="Search a place" />
            </div>
        </div>
</template>
<style>
#input {
    z-index: 10;
}
</style>
