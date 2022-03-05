export type CardType = {
    card_number: string;
    first_name: string;
    last_name: string;
    membership_tier: MembershipTierType;
}

type MembershipTierType = "bronze" | "silver" | "gold";