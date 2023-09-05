declare module "forcem-ipsum" {
  function forcemIpsum(
    option:
      | "episode 1"
      | "episode 2"
      | "episode 3"
      | "episode 4"
      | "episode 5"
      | "episode 6"
      | "episode 7"
      | "episode 8"
      | "episode 9"
      | "planets"
      | "places"
      | "characters"
      | "people",
    limit?: number,
  ): string[]

  // function forcemIpsum(option: any, limit: any): any[]
  export default forcemIpsum
}
