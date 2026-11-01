
import {
    Search,
    MapPin,
    Link as LinkIcon,
    Building2,
    Users,
    Star,
    GitFork,
    ExternalLink,
    CalendarDays,
    Code2,
    BookOpen,
    LayoutDashboard,
    Menu,
    ArrowUpRight,
    Globe,
} from "lucide-react";
import Github from "../components/assets/Github";



const user = {
    login: "torvalds",
    name: "Linus Torvalds",
    bio: "Creator of Linux and Git. Working on the Linux kernel.",
    company: "Linux Foundation",
    location: "Portland, OR",
    website: "https://kernel.org",
    followers: 330001,
    following: 0,
    repos: 12,
    avatar: "https://avatars.githubusercontent.com/u/1024025?v=4",
    joined: "September 3, 2011",
};

const repos = [
    {
        name: "linux",
        description: "Linux kernel source tree.",
        language: "C",
        color: "#555555",
        stars: "195k",
        forks: "54.2k",
        updated: "2 days ago",
    },
    {
        name: "uemacs",
        description: "MicroEmacs text editor.",
        language: "C",
        color: "#555555",
        stars: "1.2k",
        forks: "230",
        updated: "3 weeks ago",
    },
    {
        name: "test-tlb",
        description: "Testing and development utilities.",
        language: "C",
        color: "#555555",
        stars: "340",
        forks: "48",
        updated: "1 month ago",
    },
];

const days = Array.from({ length: 371 }, (_, i) => ({
    level: Math.floor(Math.random() * 5),
}));

const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const levels = [
    "bg-contribution-0",
    "bg-contribution-1",
    "bg-contribution-2",
    "bg-contribution-3",
    "bg-contribution-4",
];

export default function UserProfile() {
    return (
        <div className="min-h-screen bg-background text-foreground">

            {/* Navbar */}
            <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur">
                <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">

                    <div className="flex items-center gap-3">
                        <Github size={34} />
                        <span className="text-lg font-bold">
                            GitHub Explorer
                        </span>
                    </div>

                    <div className="hidden w-full max-w-md md:block">
                        <div className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-2.5">
                            <Search size={18} className="text-muted" />
                            <input
                                placeholder="Search GitHub username..."
                                className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
                            />
                            <kbd className="rounded border border-border px-2 py-0.5 text-xs text-muted">
                                /
                            </kbd>
                        </div>
                    </div>

                    <button className="rounded-lg border border-border p-2 md:hidden">
                        <Menu size={20} />
                    </button>

                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        className="hidden items-center gap-2 text-sm text-muted hover:text-foreground sm:flex"
                    >
                        GitHub <ExternalLink size={15} />
                    </a>
                </div>
            </header>

            <main className="mx-auto max-w-7xl px-5 py-8">

                {/* Page heading */}
                <div className="mb-8">
                    <p className="mb-2 text-sm text-muted">
                        Explore developers / Profile
                    </p>
                    <h1 className="text-2xl font-bold">
                        Developer Profile
                    </h1>
                    <p className="mt-1 text-sm text-muted">
                        Explore GitHub profiles, repositories and contributions.
                    </p>
                </div>

                {/* Profile */}
                <section className="grid gap-6 lg:grid-cols-[300px_1fr]">

                    {/* Sidebar */}
                    <aside className="h-fit rounded-card border border-border bg-surface p-5">

                        <img
                            src={user.avatar}
                            alt={user.name}
                            className="mb-5 aspect-square w-36 rounded-full border border-border object-cover"
                        />

                        <h2 className="text-2xl font-bold">{user.name}</h2>
                        <p className="mt-1 text-lg text-muted">
                            @{user.login}
                        </p>

                        <p className="my-5 text-sm leading-6 text-foreground">
                            {user.bio}
                        </p>

                        <button className="mb-5 w-full rounded-lg border border-border bg-surface-hover py-2 text-sm font-semibold hover:border-muted">
                            View Profile
                        </button>

                        <div className="space-y-4 text-sm text-muted">

                            <p className="flex items-center gap-3">
                                <Building2 size={17} /> {user.company}
                            </p>

                            <p className="flex items-center gap-3">
                                <MapPin size={17} /> {user.location}
                            </p>

                            <p className="flex items-center gap-3">
                                <Globe size={17} />
                                <a href={user.website} className="text-accent">
                                    kernel.org
                                </a>
                            </p>

                            <p className="flex items-center gap-3">
                                <CalendarDays size={17} /> Joined {user.joined}
                            </p>

                        </div>

                        <div className="my-5 border-t border-border" />

                        <div className="flex flex-wrap gap-4 text-sm">
                            <span className="flex items-center gap-2">
                                <Users size={17} className="text-muted" />
                                <b>{user.followers.toLocaleString()}</b>
                                <span className="text-muted">followers</span>
                            </span>
                            <span className="text-muted">
                                <b className="text-foreground">{user.following}</b> following
                            </span>
                        </div>

                    </aside>

                    {/* Main content */}
                    <div className="min-w-0 space-y-6">

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

                            {[
                                { label: "Public Repositories", value: user.repos, icon: BookOpen },
                                { label: "Followers", value: user.followers.toLocaleString(), icon: Users },
                                { label: "Following", value: user.following, icon: Users },
                            ].map((stat) => (
                                <div
                                    key={stat.label}
                                    className="rounded-card border border-border bg-surface p-4"
                                >
                                    <stat.icon size={20} className="mb-3 text-muted" />
                                    <p className="text-2xl font-bold">{stat.value}</p>
                                    <p className="mt-1 text-xs text-muted">{stat.label}</p>
                                </div>
                            ))}

                        </div>

                        {/* Contributions */}
                        <section className="rounded-card border border-border bg-surface p-5">

                            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                                <h3 className="font-semibold">
                                    Contribution Activity
                                </h3>
                                <span className="text-xs text-muted">
                                    2026 · Last year
                                </span>
                            </div>

                            <div className="mb-3 grid grid-cols-12 text-xs text-muted">
                                {months.map((month) => (
                                    <span key={month}>{month}</span>
                                ))}
                            </div>

                            <div className="overflow-x-auto pb-2">
                                <div className="grid w-max grid-flow-col grid-rows-7 gap-1">
                                    {days.map((day, i) => (
                                        <div
                                            key={i}
                                            title={`${day.level} contributions`}
                                            className={`h-3 w-3 rounded-[3px] ${levels[day.level]}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="mt-4 flex items-center justify-between text-xs text-muted">
                                <span>Learn how we count contributions</span>

                                <div className="flex items-center gap-1.5">
                                    Less
                                    {levels.map((level) => (
                                        <div
                                            key={level}
                                            className={`h-3 w-3 rounded-sm ${level}`}
                                        />
                                    ))}
                                    More
                                </div>
                            </div>

                        </section>

                        {/* Repositories */}
                        <section className="rounded-card border border-border bg-surface">

                            <div className="flex items-center justify-between border-b border-border p-5">
                                <div>
                                    <h3 className="font-semibold">Popular Repositories</h3>
                                    <p className="mt-1 text-xs text-muted">
                                        Explore developer projects
                                    </p>
                                </div>

                                <button className="text-sm text-accent hover:underline">
                                    View all
                                </button>
                            </div>

                            <div className="divide-y divide-border">

                                {repos.map((repo) => (
                                    <article
                                        key={repo.name}
                                        className="p-5 transition hover:bg-surface-hover/50"
                                    >

                                        <div className="flex items-center justify-between gap-3">
                                            <h4 className="flex items-center gap-2 font-semibold text-accent">
                                                <BookOpen size={16} />
                                                {repo.name}
                                            </h4>

                                            <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted">
                                                Public
                                            </span>
                                        </div>

                                        <p className="my-3 text-sm text-muted">
                                            {repo.description}
                                        </p>

                                        <div className="flex flex-wrap items-center gap-5 text-xs text-muted">

                                            <span className="flex items-center gap-2">
                                                <span
                                                    className="h-3 w-3 rounded-full"
                                                    style={{ backgroundColor: repo.color }}
                                                />
                                                {repo.language}
                                            </span>

                                            <span className="flex items-center gap-1">
                                                <Star size={14} /> {repo.stars}
                                            </span>

                                            <span className="flex items-center gap-1">
                                                <GitFork size={14} /> {repo.forks}
                                            </span>

                                            <span>Updated {repo.updated}</span>

                                        </div>

                                    </article>
                                ))}

                            </div>
                        </section>

                    </div>
                </section>

                <footer className="mt-10 border-t border-border py-6 text-center text-xs text-muted">
                    GitHub Profile Explorer · Built with React & Tailwind CSS
                </footer>

            </main>
        </div>
    );
}

