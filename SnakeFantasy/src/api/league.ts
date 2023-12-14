import { useEffect, useMemo, useState } from "react";
import { LeagueResponse } from "../types";

export const getLeagues = async (leagueId: string) => {
    try {
        const response = await fetch(`https://api.sleeper.app/v1/league/${leagueId}`);
        const json =  response.json()
        return JSON.stringify(json)
    } catch (error) {
        console.error(error)
    }
};


