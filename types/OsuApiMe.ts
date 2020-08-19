export namespace OsuApi.Me {

    export interface Kudosu {
        total: number;
        available: number;
    }

    export interface Country {
        code: string;
        name: string;
    }

    export interface Cover {
        custom_url?: any;
        url: string;
        id: string;
    }

    export interface MonthlyPlaycount {
        start_date: string;
        count: number;
    }

    export interface Page {
        html: string;
        raw: string;
    }

    export interface Level {
        current: number;
        progress: number;
    }

    export interface GradeCounts {
        ss: number;
        ssh: number;
        s: number;
        sh: number;
        a: number;
    }

    export interface Rank {
        global: number;
        country: number;
    }

    export interface Statistics {
        level: Level;
        pp: number;
        pp_rank: number;
        ranked_score: number;
        hit_accuracy: number;
        play_count: number;
        play_time: number;
        total_score: number;
        total_hits: number;
        maximum_combo: number;
        replays_watched_by_others: number;
        is_ranked: boolean;
        grade_counts: GradeCounts;
        rank: Rank;
    }

    export interface UserAchievement {
        achieved_at: Date;
        achievement_id: number;
    }

    export interface RankHistory {
        mode: string;
        data: number[];
    }

    export interface MeResponse {
        avatar_url: string;
        country_code: string;
        default_group: string;
        id: number;
        is_active: boolean;
        is_bot: boolean;
        is_online: boolean;
        is_supporter: boolean;
        last_visit: Date;
        pm_friends_only: boolean;
        profile_colour?: any;
        username: string;
        cover_url: string;
        discord: string;
        has_supported: boolean;
        interests?: any;
        join_date: Date;
        kudosu: Kudosu;
        lastfm?: any;
        location?: any;
        max_blocks: number;
        max_friends: number;
        occupation?: any;
        playmode: string;
        playstyle: string[];
        post_count: number;
        profile_order: string[];
        skype?: any;
        title?: any;
        twitter?: any;
        website?: any;
        country: Country;
        cover: Cover;
        account_history: any[];
        active_tournament_banner: any[];
        badges: any[];
        favourite_beatmapset_count: number;
        follower_count: number;
        graveyard_beatmapset_count: number;
        groups: any[];
        loved_beatmapset_count: number;
        monthly_playcounts: MonthlyPlaycount[];
        page: Page;
        previous_usernames: any[];
        ranked_and_approved_beatmapset_count: number;
        replays_watched_counts: any[];
        scores_first_count: number;
        statistics: Statistics;
        support_level: number;
        unranked_beatmapset_count: number;
        user_achievements: UserAchievement[];
        rankHistory: RankHistory;
    }

}