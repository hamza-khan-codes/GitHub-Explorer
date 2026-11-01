
import { useMemo, useState } from "react";
import {
    Search,
    MapPin,
    Users,
    GitFork,
    Star,
    Github,
    Code2,
    ArrowUpRight,
    SlidersHorizontal,
} from "lucide-react";

const developers = [
    {
        id: 1,
        username: "sarahchen",
        name: "Sarah Chen",
        avatar: "https://avatars.githubusercontent.com/u/810438",
        bio: "Frontend developer passionate about building accessible web experiences.",
        location: "San Francisco, USA",
        followers: 2450,
        repos: 42,
        stars: 1280,
        language: "TypeScript",
        skills: ["React", "Next.js", "TypeScript"],
    },
    {
        id: 2,
        username: "alexdev",
        name: "Alex Johnson",
        avatar: "https://avatars.githubusercontent.com/u/9919",
        bio: "Full-stack developer building scalable applications and open-source tools.",
        location: "London, UK",
        followers: 1820,
        repos: 35,
        stars: 940,
        language: "JavaScript",
        skills: ["Node.js", "React", "MongoDB"],
    },
    {
        id: 3,
        username: "maria_codes",
        name: "Maria Garcia",
        avatar: "https://avatars.githubusercontent.com/u/583231",
        bio: "Python developer interested in AI, machine learning, and data science.",
        location: "Madrid, Spain",
        followers: 3200,
        repos: 58,
        stars: 2100,
        language: "Python",
        skills: ["Python", "TensorFlow", "PyTorch"],
    },
    {
        id: 4,
        username: "danielkim",
        name: "Daniel Kim",
        avatar: "https://avatars.githubusercontent.com/u/2",
        bio: "Building developer tools and contributing to the open-source community.",
        location: "Seoul, South Korea",
        followers: 980,
        repos: 27,
        stars: 620,
        language: "Go",
        skills: ["Go", "Docker", "Kubernetes"],
    },
    {
        id: 5,
        username: "emmawilson",
        name: "Emma Wilson",
        avatar: "https://avatars.githubusercontent.com/u/3",
        bio: "UI engineer who loves clean code, design systems, and creative interfaces.",
        location: "Toronto, Canada",
        followers: 1560,
        repos: 31,
        stars: 870,
        language: "TypeScript",
        skills: ["React", "Tailwind", "Figma"],
    },
    {
        id: 6,
        username: "mohammeddev",
        name: "Mohammed Ali",
        avatar: "https://avatars.githubusercontent.com/u/4",
        bio: "Backend engineer exploring cloud computing and distributed systems.",
        location: "Dubai, UAE",
        followers: 760,
        repos: 19,
        stars: 430,
        language: "Java",
        skills: ["Java", "Spring Boot", "AWS"],
    },
];

const languages = [
    "All Languages",
    "JavaScript",
    "TypeScript",
    "Python",
    "Go",
    "Java",
];

function DeveloperCard({ developer }) {
    return (
        <article className="group rounded-2xl border border-border bg-surface p-5 transition hover:border-accent/60 hover:bg-surface-hover">
            <div className="flex items-start justify-between">
                <img
                    src={developer.avatar}
                    alt={developer.name}
                    className="h-14 w-14 rounded-full border border-border object-cover"
                />

                <a
                    href={`https://github.com/${developer.username}`}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-border p-2 text-muted transition hover:border-accent hover:text-accent"
                    aria-label={`Visit ${developer.username}'s GitHub`}
                >
                    <ArrowUpRight size={18} />
                </a>
            </div>

            <div className="mt-4">
                <h3 className="font-semibold text-foreground">
                    {developer.name}
                </h3>

                <p className="mt-0.5 text-sm text-muted">
                    @{developer.username}
                </p>

                <p className="mt-3 min-h-10 text-sm leading-5 text-muted">
                    {developer.bio}
                </p>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-muted">
                <MapPin size={14} />
                <span>{developer.location}</span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
                {developer.skills.map((skill) => (
                    <span
                        key={skill}
                        className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted"
                    >
                        {skill}
                    </span>
                ))}
            </div>

            <div className="mt-5 grid grid-cols-3 border-t border-border pt-4">
                <div>
                    <div className="flex items-center gap-1.5 text-muted">
                        <Users size={14} />
                        <span className="text-xs">Followers</span>
                    </div>
                    <p className="mt-1 font-semibold text-foreground">
                        {developer.followers.toLocaleString()}
                    </p>
                </div>

                <div>
                    <div className="flex items-center gap-1.5 text-muted">
                        <GitFork size={14} />
                        <span className="text-xs">Repos</span>
                    </div>
                    <p className="mt-1 font-semibold text-foreground">
                        {developer.repos}
                    </p>
                </div>

                <div>
                    <div className="flex items-center gap-1.5 text-muted">
                        <Star size={14} />
                        <span className="text-xs">Stars</span>
                    </div>
                    <p className="mt-1 font-semibold text-foreground">
                        {developer.stars.toLocaleString()}
                    </p>
                </div>
            </div>

            <div className="mt-4 flex items-center gap-2 border-t border-border pt-4">
                <Code2 size={15} className="text-accent" />
                <span className="text-sm text-muted">
                    Main language:
                </span>
                <span className="text-sm font-medium text-foreground">
                    {developer.language}
                </span>
            </div>
        </article>
    );
}

export default function Explore() {
    const [search, setSearch] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState("All Languages");
    const [sortBy, setSortBy] = useState("followers");

    const filteredDevelopers = useMemo(() => {
        let result = developers.filter((developer) => {
            const searchText = search.toLowerCase();

            const matchesSearch =
                developer.name.toLowerCase().includes(searchText) ||
                developer.username.toLowerCase().includes(searchText) ||
                developer.bio.toLowerCase().includes(searchText) ||
                developer.skills.some((skill) =>
                    skill.toLowerCase().includes(searchText)
                );

            const matchesLanguage =
                selectedLanguage === "All Languages" ||
                developer.language === selectedLanguage;

            return matchesSearch && matchesLanguage;
        });

        return [...result].sort((a, b) => b[sortBy] - a[sortBy]);
    }, [search, selectedLanguage, sortBy]);

    return (
        <main className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                {/* Page Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 text-sm text-accent">
                        <Github size={17} />
                        <span>Community</span>
                    </div>

                    <h1 className="mt-3 text-3xl font-bold tracking-tight">
                        Explore Developers
                    </h1>

                    <p className="mt-2 max-w-2xl text-muted">
                        Discover developers, explore their work, and find people
                        building interesting things in the open-source community.
                    </p>
                </div>

                {/* Search and Filters */}
                <div className="mb-7 flex flex-col gap-3 lg:flex-row">
                    <div className="relative flex-1">
                        <Search
                            size={19}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                        />

                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search by name, username, or skill..."
                            className="w-full rounded-xl border border-border bg-surface py-3 pl-11 pr-4 text-sm text-foreground outline-none placeholder:text-subtle focus:border-accent"
                        />
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                        <select
                            value={selectedLanguage}
                            onChange={(e) => setSelectedLanguage(e.target.value)}
                            className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none focus:border-accent"
                        >
                            {languages.map((language) => (
                                <option key={language} value={language}>
                                    {language}
                                </option>
                            ))}
                        </select>

                        <div className="flex items-center gap-2 rounded-xl border border-border bg-surface px-3">
                            <SlidersHorizontal size={16} className="text-muted" />
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="bg-transparent py-3 text-sm text-foreground outline-none"
                            >
                                <option value="followers">Most followers</option>
                                <option value="stars">Most stars</option>
                                <option value="repos">Most repositories</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Results Header */}
                <div className="mb-5 flex items-center justify-between">
                    <div>
                        <h2 className="font-semibold">Developers</h2>
                        <p className="mt-1 text-sm text-muted">
                            {filteredDevelopers.length} developers found
                        </p>
                    </div>
                </div>

                {/* Developer Grid */}
                {filteredDevelopers.length > 0 ? (
                    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                        {filteredDevelopers.map((developer) => (
                            <DeveloperCard
                                key={developer.id}
                                developer={developer}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="rounded-2xl border border-border bg-surface px-5 py-16 text-center">
                        <Search size={30} className="mx-auto text-muted" />
                        <h3 className="mt-4 font-semibold">No developers found</h3>
                        <p className="mt-2 text-sm text-muted">
                            Try another search term or language.
                        </p>
                        <button
                            onClick={() => {
                                setSearch("");
                                setSelectedLanguage("All Languages");
                            }}
                            className="mt-5 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition hover:bg-accent-hover"
                        >
                            Clear filters
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}
