import Image from "next/image";

export default function Experience() {
    return (
        <div className="text-center p-8">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Why to choose US?
            </h2>

            <div className="flex flex-wrap items-center mt-20 text-left text-center">
                <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                    <Image src="train.svg" alt="gem" className="inline-block rounded shadow-lg border border-merino-400" width={200} height={200}></Image>
                </div>
                <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
                    <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                        Simple integration
                    </h3>
                    <p className="sm:text-lg mt-6">
                        Use the LocaleData gem to download translations directly into your Ruby on Rails
                        projects using the provided command line interface. Just create a project and follow
                        the step-by-step instructions.
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap items-center mt-20 text-left text-center">
                <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                    <Image src="train.svg" alt="project members" className="inline-block rounded shadow-lg border border-merino-400" width={200} height={200}></Image>
                </div>
                <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
                    <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                        Easy collaboration
                    </h3>
                    <p className="sm:text-lg mt-6">
                        All LocaleData projects are private. Each project can have multiple collaborators
                        with different roles and access permissions. You determine who can see and edit
                        your translations. Just add admins, developers, translators and configure their
                        access rights.
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap items-center mt-20 text-left  text-center">
                <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                    <Image src="train.svg" alt="editor" className="inline-block rounded shadow-lg border border-merino-400" width={200} height={200}></Image>
                </div>
                <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
                    <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                        No more syntax errors
                    </h3>
                    <p className="sm:text-lg mt-6">
                        LocaleData provides you easy import/export functions for your YAML files.
                        Use a simple editor with many predefined languages to manage your locales.
                        LocaleData also supports multiple translation types, such as simple text, plural forms,
                        numbers, booleans, symbols, arrays, ...
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap items-center mt-20 text-left text-center">
                <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                    <Image src="train.svg" alt="bulk editing" className="inline-block rounded shadow-lg border border-merino-400" width={200} height={200}></Image>
                </div>
                <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
                    <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                        Bulk editing
                    </h3>
                    <p className="sm:text-lg mt-6">
                        Do you need to change the path of many translation keys at once? No problem, just
                        use the bulk editing feature and enjoy the results.
                    </p>
                </div>
            </div>

        </div>
    )
}