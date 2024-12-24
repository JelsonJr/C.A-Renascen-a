<template>
    <v-container class="soccer-field pa-0 mt-5">
        <v-row>
            <v-col cols="12" class="pa-0 d-flex justify-center align-center">
                <div class="text-center goal-area">Gol</div>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12">
                <div class="text-center defensive-area">Zaga</div>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" class="d-flex justify-center align-center position-relative">
                <div class="text-center midfield-area">Meio</div>
                <div class="center-circle"></div>
                <div class="horizontal-line"></div>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12">
                <div class="text-center attacking-area">Ataque</div>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" class="pa-0 d-flex justify-center align-center">
                <div class="text-center goal-area">Gol</div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts"></script>

<style scoped>
.soccer-field {
    background-color: #2e7d32;
    border: 2px solid #ffffff;
    border-radius: 10px;
    padding: 20px;
    height: 700px;
    width: 500px;
    position: relative;
}

.goal-area {
    border: 2px solid #ffffff;
    margin-top: 10px;
    width: 350px;
    height: 100px;
}

.defensive-area,
.midfield-area,
.attacking-area {
    background-color: rgba(0, 0, 0, 0.1);
    border: 2px solid transparent;
    height: 139.5px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.center-circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    border: 2px solid #ffffff;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.05);
    z-index: 1;
}

.horizontal-line {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    width: 96%;
    height: 2px;
    background-color: #ffffff;
    z-index: 0;
}
</style>
