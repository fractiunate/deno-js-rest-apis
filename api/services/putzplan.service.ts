interface PutzplanEntry {
  planUID: string;
  name: string;
  digitID: string;
  rooms: string[];
  members: string[];
}

const PUTZPLAN_MAP = new Map<string, PutzplanEntry>();

export function getPutzplan(planUID: string): PutzplanEntry | null{
  return PUTZPLAN_MAP.get(planUID) ?? null;
}

export function addToFavs(planUID: string, name: string, digitID = "") {
  if (!PUTZPLAN_MAP.has(planUID)) {
    PUTZPLAN_MAP.set(planUID, {
      planUID,
      name,
      digitID,
      rooms : [],
      members: []
    });
  }

}

export function removeFromFavs(memberId: string, movieId: string) {
  if (FAVS.has(memberId)) {
    FAVS.set(memberId, FAVS.get(memberId)!.filter(it => it.movieId !== movieId))
  }
}