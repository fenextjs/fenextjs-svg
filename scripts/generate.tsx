const main = async () => {
    const Bun_ = eval("Bun");
    console.log("---------------------------");
    console.log(`Init generate`);
    console.log("---------------------------");
  
    const URL_BASE = "./src"
    const glob = new Bun_.Glob("**/index.tsx");
  
    const ListPath :string[] = []

    for await (const PATH of glob.scan(URL_BASE)) {
      ListPath.push(`export * from "./${PATH}";\n`.replace("/index.tsx",""))
      
    }
    await Bun_.write( "./src/index.ts",ListPath.join(""));
  
    console.log("---------------------------");
    console.log(`Finish generate`);
    console.log("---------------------------");

}

main()